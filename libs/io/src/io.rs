use outp::println::print_ln;
use std::path::{Path, PathBuf};
use std::{fs, thread};
use tp::thread_pool::ThreadPool;

pub fn dir_walk<P: AsRef<Path>>(path: P) {
    // let mut result = Vec::new();
    let tp = ThreadPool::new(None);
    let paths = fs::read_dir(path).unwrap();
    tp.execute(move || {
        for entry in paths {
            let path = entry.unwrap().path();
            let metadata = path.metadata().unwrap();
            dbg!(&path);
            if metadata.is_dir() {
                dir_walk(path);
            } else {
                // result.push(path);
            }
        }
    });
    print_ln(tp.count());
    // return result;
}
