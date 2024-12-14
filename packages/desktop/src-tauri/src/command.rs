use std::fs::File;
use std::io::Write;
use data_structure::element::Document;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
pub fn greet(name: &str) -> String {
  format!("Hello, {}! You've been greeted from Rust!", name)
}

fn save_document_to_file(document: &Document, path: &str) -> std::io::Result<()> {
  // 将文档序列化为二进制数据
  let encoded: usize = bincode::encode_into_std_write(document).unwrap();

  // 打开文件（如果不存在会创建）
  let mut file = File::create(path)?;

  // 将二进制数据写入文件
  // file.write_all(&encoded)?;

  Ok(())
}
