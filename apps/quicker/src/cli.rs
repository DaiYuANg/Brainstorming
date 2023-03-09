use std::path::PathBuf;

use clap::Parser;

// #[derive(Parser)]
// #[command(author,version,about,long_about=None)]
pub struct Cli {
    pub name: Option<String>,
    /// Sets a custom config file
    // #[arg(short, long, value_name = "FILE")]
    pub config: Option<PathBuf>,

    /// Turn debugging information on
    // #[arg(short, long, action = clap::ArgAction::Count)]
    pub debug: u8,
    // #[command(clap::Command)]
    // pub command: Option<Command>
    pub gui: Option<bool>,
}

// #[derive(clap::Subcommand)]
pub enum Commands {
    /// does testing things
    Test {
        /// lists test values
        // #[arg(short, long)]
        list: bool,
    },
}
