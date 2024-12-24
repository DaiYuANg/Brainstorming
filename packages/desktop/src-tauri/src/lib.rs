use crate::command::greet;
use crate::git_service::{GitService, GitServiceImpl};
use shaku::HasComponent;
use shaku_derive::module;
use tauri::{Manager, TitleBarStyle, WebviewUrl, WebviewWindowBuilder};
use tauri::menu::{Menu, MenuItem, PredefinedMenuItem, Submenu};

mod command;
mod git_service;

module! {
    MyModule {
        components = [GitServiceImpl],
        providers = []
    }
}
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  let module = MyModule::builder().build();
  let git_service: &dyn GitService = module.resolve_ref();
  tauri::Builder::default()
    .plugin(tauri_plugin_fs::init())
    .plugin(tauri_plugin_log::Builder::new().build())
    .plugin(tauri_plugin_opener::init())
    .setup(|app| {
      app.manage(module);
      let platform = tauri_plugin_os::platform();
      let win_builder = WebviewWindowBuilder::new(app, "main", WebviewUrl::default())
        .title("Transparent Titlebar Window")
        .inner_size(1000.0, 800.0);

      #[cfg(target_os = "macos")]
      let win_builder = win_builder.title_bar_style(TitleBarStyle::Transparent);

      let window = win_builder.build().unwrap();
      // set background color only when building for macOS
      #[cfg(target_os = "macos")]
      {
        use cocoa::appkit::{NSColor, NSWindow};
        use cocoa::base::{id, nil};

        let ns_window = window.ns_window().unwrap() as id;
        unsafe {
          let bg_color = NSColor::colorWithRed_green_blue_alpha_(
            nil,
            50.0 / 255.0,
            130.0 / 255.0,
            163.5 / 255.0,
            1.0,
          );
          ns_window.setBackgroundColor_(bg_color);
        }
      }
      Ok(())
    })
    .menu(|handle| Menu::with_items(handle, &[
      &Submenu::with_items(
        handle,
        "Brainstorming",
        true,
        &[
          &PredefinedMenuItem::close_window(handle, None)?,
          #[cfg(target_os = "macos")]
          &MenuItem::new(handle, "Hello", true, None::<&str>)?,
        ],
      )?,
      &Submenu::with_items(
        handle,
        "File",
        true,
        &[
          #[cfg(target_os = "macos")]
          &MenuItem::new(handle, "Open", true, None::<&str>)?,
        ],
      )?
    ]))
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
