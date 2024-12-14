use data_structure::element::Document;
use std::fs::File;
use std::io::Write;

#[tauri::command]
pub fn greet(name: &str) -> String {
  format!("Hello, {}! You've been greeted from Rust!", name)
}

fn save_document_to_file(document: &Document, path: &str) -> std::io::Result<()> {
  // 将文档序列化为二进制数据
  let serialized = serde_json::to_value(&document)?.to_string();

  // 打开文件（如果不存在会创建）
  let mut file = File::create(path)?;

  // 将二进制数据写入文件
  file.write_all((&serialized).as_ref())?;

  Ok(())
}
