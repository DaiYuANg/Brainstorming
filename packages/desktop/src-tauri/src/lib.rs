use redb::{Database, TableDefinition};
use crate::command::greet;
use crate::git_service::{GitService, GitServiceImpl};
use shaku::HasComponent;
use shaku_derive::module;
use tauri::{Manager, TitleBarStyle, WebviewUrl, WebviewWindowBuilder};
use tauri::menu::{Menu, MenuItem, PredefinedMenuItem, Submenu};

mod command;
mod git_service;
mod runtime;

module! {
    MyModule {
        components = [GitServiceImpl],
        providers = []
    }
}
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  const TABLE: TableDefinition<&str, u64> = TableDefinition::new("my_data");
  let db = Database::create("bs.redb");
  let module = MyModule::builder().build();
  let git_service: &dyn GitService = module.resolve_ref();
  tauri::Builder::default()
    .plugin(tauri_plugin_fs::init())
    .plugin(tauri_plugin_log::Builder::new().build())
    .plugin(tauri_plugin_opener::init())
    .setup(|app| {
      app.manage(module);
      let platform = tauri_plugin_os::platform();
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
