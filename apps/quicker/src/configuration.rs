use serde::Deserialize;
#[derive(Deserialize)]
pub struct Package {
    name: String,
    description: Option<String>,
    authors: Vec<String>,
    publish: Option<bool>,
    // ... and so on ...
}

#[derive(Deserialize)]
pub struct Config {
    package: Package,
    rustc: Option<String>,
    rustdoc: Option<String>,
    // ... and so on ...
}
