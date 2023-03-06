use std::fs;
use std::path::{Path, PathBuf};

pub fn dir_walk<P: AsRef<Path>>(path: P) -> Vec<PathBuf> {
    let mut result = vec![];
    let paths = fs::read_dir(path).unwrap();
    for mut entry in paths {
        let entry = entry;
        let path = entry.unwrap().path();
        let metadata = path.metadata().unwrap();
        dbg!(&path);
        if metadata.is_dir() {
            dir_walk(path);
        } else {
            result.insert(result.len(), path);
        }
    }
    return result;
}
