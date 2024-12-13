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
        println!("{}", content);
    }
}
