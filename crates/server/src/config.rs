use figment::providers::{Env, Format, Toml};
use figment::Figment;

pub fn parse() {
  let figment = Figment::new()
    .merge(Env::prefixed("APP_"))
    .join(Toml::file("App.json"));
}
