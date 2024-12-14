use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub enum NodeType {
  Text,      // "text" 类型
  Paragraph, // "paragraph" 类型
  Heading,   // "heading" 类型
  List,      // "list" 类型
  Image,     // "image" 类型
             // 可以继续添加更多节点类型
}

impl NodeType {
  // 可选的：为枚举添加自定义字符串表示
  pub fn as_str(&self) -> &str {
    match self {
      NodeType::Text => "text",
      NodeType::Paragraph => "paragraph",
      NodeType::Heading => "heading",
      NodeType::List => "list",
      NodeType::Image => "image",
    }
  }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Node {
  pub node_type: NodeType,
  pub text: Option<String>,
  pub children: Option<Vec<Node>>,
  pub marks: Option<Vec<String>>,
  pub attributes: Option<serde_json::Value>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Document {
  pub id: Option<i32>,
  pub title: String,
  pub content: Node,
  pub created_at: Option<String>,
  pub updated_at: Option<String>,
}

