
use tauri_plugin_log::LogTarget;
use window_shadows::set_shadow;
use window_vibrancy::{apply_blur, apply_vibrancy, NSVisualEffectMaterial};
#[tauri::command(async)]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
use tauri::Manager;

pub fn tauri_run() {

}
