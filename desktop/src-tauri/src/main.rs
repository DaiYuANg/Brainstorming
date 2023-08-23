// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod setup_tauri;

use crate::setup_tauri::init;

#[tokio::main]
async fn main() {
    init()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
