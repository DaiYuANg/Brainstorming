pub mod thread_pool;
pub mod thread_worker;
pub mod types;

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use crate::thread_pool::ThreadPool;
    use outp::println::print_ln;

    #[test]
    fn test_thread_pool_new() {
        print_ln("123");
        let tp = ThreadPool::new(None);
        tp.execute(|| print_ln(123))
    }
}
