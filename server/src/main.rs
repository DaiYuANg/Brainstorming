#[macro_use]
extern crate rocket;

use rocket_okapi::swagger_ui::{make_swagger_ui, SwaggerUIConfig};


#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

fn get_docs() -> SwaggerUIConfig {
    use rocket_okapi::swagger_ui::UrlObject;

    SwaggerUIConfig {
        url: "/my_resource/openapi.json".to_string(),
        urls: vec![UrlObject::new("My Resource", "/v1/company/openapi.json")],
        ..Default::default()
    }
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/swagger", make_swagger_ui(&get_docs()))
        .mount("/", routes![index])
}
