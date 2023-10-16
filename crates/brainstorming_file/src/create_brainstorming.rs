use sled::open;
use std::path::PathBuf;

pub fn create_brainstorming_file(path: &str) {
    let tree = open(path).unwrap();
    let old_value = tree.insert("key", "value").unwrap();

    // range queries
    for kv_result in tree.range("key_1".."key_9") {}

    // deletion
    let old_value = tree.remove(&"key");

    // atomic compare and swap
    tree.compare_and_swap("key", Some("current_value"), Some("new_value"))
        .unwrap();

    // block until all operations are stable on disk
    // (flush_async also available to get a Future)
    tree.flush();
}
