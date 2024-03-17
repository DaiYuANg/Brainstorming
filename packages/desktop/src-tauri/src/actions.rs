pub mod actions {
    #[tauri::command]
    pub fn create_brainstorming() {
        println!("I was invoked from JS!");
    }
}
