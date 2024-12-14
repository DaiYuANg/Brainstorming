use git2::Repository;
use shaku::Interface;
use shaku_derive::{module, Component};

pub trait GitService: Interface {
  fn log(&self, content: &str);
}

#[derive(Component)]
#[shaku(interface = GitService)]
pub struct GitServiceImpl {}

impl GitService for GitServiceImpl {
  fn log(&self, content: &str) {
    let repo = match Repository::init("/path/to/a/repo") {
      Ok(repo) => repo,
      Err(e) => panic!("failed to init: {}", e),
    };
    println!("{}", content);
  }
}
