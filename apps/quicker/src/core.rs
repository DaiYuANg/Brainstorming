use async_std::stream::Stream;
use std::path::Path;
// 0.3.1
use std::{io, path::PathBuf};
use tokio::fs::DirEntry;
// 0.2.4
use crate::cli::Cli;
use clap::Parser;
use tokio::{fs, stream, time::error::Error};

pub struct QuickerCore {
    pub(crate) cli: Cli,
}

impl QuickerCore {
    pub fn prepare(&self) -> &QuickerCore {
        // self::Cli::parse();
        // Notification::new()
        //     .summary("Quicker Startup")
        //     .body("This will almost look like a real firefox notification.")
        //     .icon("firefox")
        //     .show()
        //     .unwrap();
        self
    }

    pub fn init(&self) -> &QuickerCore {
        env_logger::init();
        debug!("quicker init");
        self
        // return self.
    }

    pub fn run(&self) -> &QuickerCore {
        // for e in fs::read_dir(path)? {
        //     let e = e?;
        //     let path = e.path();
        //     if path.is_dir() {
        //         visit(&path)?;
        //     } else if path.is_file() {
        //         println!("File: {:?}", path);
        //     }
        // }
        self
    }

    // pub fn visit(&self,path: impl Into<PathBuf>) -> impl Stream<Item=io::Result<DirEntry>> + Send + 'static {
    // async fn one_level(path: PathBuf, to_visit: &mut Vec<PathBuf>) -> io::Result<Vec<DirEntry>> {
    //     let mut dir = fs::read_dir(path).await?;
    //     let mut files = Vec::new();
    //
    //     while let Some(child) = dir.next_entry().await? {
    //         if child.metadata().await?.is_dir() {
    //             to_visit.push(child.path());
    //         } else {
    //             files.push(child)
    //         }
    //     }
    //
    //     Ok(files)
    // }
    //
    // stream::unfold(vec![path.into()], |mut to_visit| {
    //     async {
    //         let path = to_visit.pop()?;
    //         let file_stream = match one_level(path, &mut to_visit).await {
    //             Ok(files) => stream::iter(files).map(Ok).left_stream(),
    //             Err(e) => stream::once(async { Err(e) }).right_stream(),
    //         };
    //
    //         Some((file_stream, to_visit))
    //     }
    // })
    //     .flatten()
    // }
}

impl Default for QuickerCore {
    fn default() -> Self {
        todo!()
    }
}
