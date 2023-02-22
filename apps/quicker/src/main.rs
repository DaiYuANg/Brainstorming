#![feature(default_free_fn)]

use clap::Parser;
use figment::providers::{Env, Format, Toml};
use figment::Figment;

use crate::configuration::Config;
use crate::gui::QuickerGUI;
use command::Cli;
use notify_rust::Notification;
use sysinfo::{ProcessExt, System, SystemExt};

mod command;
mod configuration;
mod core;
mod gui;

#[macro_use]
extern crate log;

fn prepare() {

    // let configuration: Config = Figment::new().merge(Toml::file("Cargo.toml"))
    //     .merge(Env::prefixed("CARGO_"))
    //     .merge(Env::raw().only(&["RUSTC", "RUSTDOC"])).extract().unwrap();
}

//  init for some component
fn init() {
    env_logger::init();
    // initialize the hotkeys manager
}

fn main() {
    prepare();
    init();
    let cli = Cli::parse();
    info!("Quicker startup");
    Notification::new()
        .summary("Quicker Startup")
        .body("This will almost look like a real firefox notification.")
        .icon("firefox")
        .show()
        .unwrap();
    let mut sys = System::new_all();
    sys.refresh_all();

    for disk in sys.disks() {
        println!("{:?}", disk);
    }

    println!("total memory: {} bytes", sys.total_memory());
    println!("used memory : {} bytes", sys.used_memory());
    println!("total swap  : {} bytes", sys.total_swap());
    println!("used swap   : {} bytes", sys.used_swap());

    // Display system information:
    println!("System name:             {:?}", sys.name());
    println!("System kernel version:   {:?}", sys.kernel_version());
    println!("System OS version:       {:?}", sys.os_version());
    println!("System host name:        {:?}", sys.host_name());

    // Number of CPUs:
    println!("NB CPUs: {}", sys.physical_core_count().unwrap());

    if let Some(name) = cli.name.as_deref() {
        println!("Value for name: {name}");
    }
    QuickerGUI::show();
}
