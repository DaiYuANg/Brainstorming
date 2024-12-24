mod api;
mod modules;
mod post;
mod config;

use crate::modules::AutoFacModule;
use actix_web::{get, web, App, HttpRequest, HttpServer};
use env_logger::Env;
use std::sync::Arc;
use utoipa::OpenApi;

#[get("/")]
async fn index(req: HttpRequest) -> &'static str {
  println!("REQ: {:?}", req);
  "Hello world!\r\n"
}

#[tokio::main]
async fn main() -> std::io::Result<()> {
  let module = Arc::new(AutoFacModule::builder().build());
  env_logger::init_from_env(Env::default().default_filter_or("info"));
  HttpServer::new(move || {
    App::new()
      .app_data(module.clone())
      .service(index)
      .route("/echo", web::get().to(api::ws::echo))
  })
  .bind(("127.0.0.1", 8080))?
  .run()
  .await
}
