use actix_web::{get, middleware, rt, web, App, HttpRequest, HttpServer};
use env_logger::Env;
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;

#[get("/")]
async fn index(req: HttpRequest) -> &'static str {
  println!("REQ: {:?}", req);
  "Hello world!\r\n"
}

#[tokio::main]
async fn main() -> std::io::Result<()> {
  // #[derive(OpenApi)]
  // #[openapi(
  //   paths(coord_f64, coord_u64),
  //   components(schemas(MyObject<f64>, MyObject<u64>))
  // )]
  // struct ApiDoc;

  env_logger::init_from_env(Env::default().default_filter_or("info"));
  HttpServer::new(|| App::new()
    // .service(
    //   SwaggerUi::new("/swagger-ui/{_:.*}")
    //     .url("/api-docs/openapi.json", ApiDoc::openapi()),
    // )
    .service(index))
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
