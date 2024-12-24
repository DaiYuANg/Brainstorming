use async_trait::async_trait;
use sea_orm::DatabaseConnection;
use shaku::{module, Component, Interface};

#[async_trait]
pub trait IDatabase: Interface {
  async fn db_instance(&self) -> DatabaseConnection;
}

module! {
    pub AutoFacModule {
        components = [Database],
        providers = []
    }
}

#[derive(Component)]
#[shaku(interface = IDatabase)]
pub struct Database;

#[async_trait]
impl IDatabase for Database {
  async fn db_instance(&self) -> DatabaseConnection {
    sea_orm::Database::connect("sqlite://brainstorming.sqlite?mode=rwc")
      .await
      .expect("db connection")
  }
}
