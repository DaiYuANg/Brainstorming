use async_std::net::TcpStream;
use clap::Parser;
use figment::providers::{Env, Format, Toml};
use figment::Figment;
use std::fs;

use crate::configuration::Config;
use crate::core::QuickerCore;
use crate::gui::QuickerGUI;
use cli::Cli;
use notify_rust::Notification;
use sysinfo::{ProcessExt, System, SystemExt};
use tracing_subscriber::util::SubscriberInitExt;

mod cli;
mod configuration;
mod core;
mod gui;

#[macro_use]
extern crate log;
#[tokio::main]
async fn main() {
    for entry in fs::read_dir("/") {
        let entry = entry;
        let path = entry.path();

        let metadata = fs::metadata(&path);
        let last_modified = metadata.modified().elapsed().as_secs();

        if last_modified < 24 * 3600 && metadata.is_file() {
            println!(
                "Last modified: {:?} seconds, is read only: {:?}, size: {:?} bytes, filename: {:?}",
                last_modified,
                metadata.permissions().readonly(),
                metadata.len(),
                path.file_name().ok_or("No filename")?
            );
        }
    }
    let _core = QuickerCore {
        cli: Cli {
            name: None,
            config: None,
            debug: 0,
            gui: None,
        },
    }
    .prepare()
    .init();
    // let cli = Cli::parse();
    // info!("Quicker startup");
    // Notification::new()
    //     .summary("Quicker Startup")
    //     .body("This will almost look like a real firefox notification.")
    //     .icon("firefox")
    //     .show()
    //     .unwrap();
    // let mut sys = System::new_all();
    // sys.refresh_all();
    //
    // for disk in sys.disks() {
    //     println!("{:?}", disk);
    // }
    //
    // println!("total memory: {} bytes", sys.total_memory());
    // println!("used memory : {} bytes", sys.used_memory());
    // println!("total swap  : {} bytes", sys.total_swap());
    // println!("used swap   : {} bytes", sys.used_swap());
    //
    // // Display system information:
    // println!("System name:             {:?}", sys.name());
    // println!("System kernel version:   {:?}", sys.kernel_version());
    // println!("System OS version:       {:?}", sys.os_version());
    // println!("System host name:        {:?}", sys.host_name());
    //
    // // Number of CPUs:
    // println!("NB CPUs: {}", sys.physical_core_count().unwrap());
    //
    // if let Some(name) = cli.name.as_deref() {
    //     println!("Value for name: {name}");
    // }
    // QuickerGUI::show();
}
