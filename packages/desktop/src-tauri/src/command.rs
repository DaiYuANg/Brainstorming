use data_structure::element::Document;
use std::fs::File;
use std::io::Write;

#[tauri::command]
pub fn greet(name: &str) -> String {
  format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
pub fn save_document_to_file(document: &Document, path: &str) -> std::io::Result<()> {
  let serialized = serde_json::to_value(&document)?.to_string();

  let mut file = File::create(path)?;

  file.write_all((&serialized).as_ref())?;

  Ok(())
}
