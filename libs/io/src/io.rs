// use outp::println::print_ln;
use std::path::{Path, PathBuf};
use std::{fs, thread};
use outp::println;
// use outp::println::print_ln;
// use tp::thread_pool::ThreadPool;

pub fn dir_walk<P: AsRef<Path>>(path: P) {
    let tpt = tp::thread_pool::ThreadPool::new(None);
    // let paths = fs::read_dir(path).unwrap();
    // for entry in paths {
    //     let th = thread::spawn(|| {
    //         let path = entry.unwrap().path();
    //         let metadata = path.metadata().unwrap();
    //         if metadata.is_dir() {
    //             dir_walk(path);
    //         } else {
    //             dbg!(&path);
    //         }
    //     });
    //     th.join().unwrap();
    // }
    tpt.execute(move || {
        for entry in paths {
            print_ln(&entry);
            let path = entry.unwrap().path();
            let metadata = path.metadata().unwrap();
            if metadata.is_dir() {
                dir_walk(path);
            } else {
                dbg!(&path);
                // result.push(path);
            }
        }
    });
}
