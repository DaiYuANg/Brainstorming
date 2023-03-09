use async_std::fs::read_dir;
use async_std::net::TcpStream;
use clap::Parser;
use figment::providers::{Env, Format, Toml};
use figment::Figment;
use std::{env, fs};

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
use io::io::dir_walk;
use rdev::{listen, Event, EventType, Key, Keyboard, KeyboardState};

// This will block.
fn callback(event: Event) {
    println!("My callback {:?}", event);
    let mut keyboard = Keyboard::new().unwrap();
    let key = keyboard.add(&EventType::KeyPress(Key::KeyS));
    match event.name {
        Some(..) => println!("123"),
        Some(k) => println!("ke"),
        // Some(string) => println!("User wrote {:?}", string),
        None => (),
        _ => {}
    }
}

fn main() {
    // let paths = fs::read_dir("./").unwrap();
    // for path in paths {
    //     println!("Name: {}", path.unwrap().path().display())
    // }
    dir_walk(".");
    // if let Err(error) = listen(callback) {
    //     println!("Error: {:?}", error)
    // }
    // let current_dir = env::current_dir()?;
    // println!(
    //     "Entries modified in the last 24 hours in {:?}:",
    //     current_dir
    // );
    //
    // for entry in fs::read_dir(current_dir)? {
    //     let entry = entry?;
    //     let path = entry.path();
    //
    //     let metadata = fs::metadata(&path)?;
    //     let last_modified = metadata.modified()?.elapsed()?.as_secs();
    //
    //     if last_modified < 24 * 3600 && metadata.is_file() {
    //         println!(
    //             "Last modified: {:?} seconds, is read only: {:?}, size: {:?} bytes, filename: {:?}",
    //             last_modified,
    //             metadata.permissions().readonly(),
    //             metadata.len(),
    //             path.file_name().ok_or("No filename")?
    //         );
    //     }
    // }
    //
    // Ok(())
}

// #[tokio::main]
// async fn main() {
//     let current = env::current_dir();
//     for entry in fs::read_dir(current)? {
//         let entry = entry?;
//         let path = entry.path();
//         println!("{:?}",path);
//     };
//     let _core = QuickerCore {
//         cli: Cli {
//             name: None,
//             config: None,
//             debug: 0,
//             gui: None,
//         },
//     }
//     .prepare()
//     .init();
//     // let cli = Cli::parse();
//     // info!("Quicker startup");
//     // Notification::new()
//     //     .summary("Quicker Startup")
//     //     .body("This will almost look like a real firefox notification.")
//     //     .icon("firefox")
//     //     .show()
//     //     .unwrap();
//     // let mut sys = System::new_all();
//     // sys.refresh_all();
//     //
//     // for disk in sys.disks() {
//     //     println!("{:?}", disk);
//     // }
//     //
//     // println!("total memory: {} bytes", sys.total_memory());
//     // println!("used memory : {} bytes", sys.used_memory());
//     // println!("total swap  : {} bytes", sys.total_swap());
//     // println!("used swap   : {} bytes", sys.used_swap());
//     //
//     // // Display system information:
//     // println!("System name:             {:?}", sys.name());
//     // println!("System kernel version:   {:?}", sys.kernel_version());
//     // println!("System OS version:       {:?}", sys.os_version());
//     // println!("System host name:        {:?}", sys.host_name());
//     //
//     // // Number of CPUs:
//     // println!("NB CPUs: {}", sys.physical_core_count().unwrap());
//     //
//     // if let Some(name) = cli.name.as_deref() {
//     //     println!("Value for name: {name}");
//     // }
//     // QuickerGUI::show();
// }
