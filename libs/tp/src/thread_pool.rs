use crate::thread_worker::Worker;
use crate::types::Job;
use std::sync::{mpsc, Arc, Mutex};

#[derive(Debug)]
pub struct ThreadPool {
    workers: Vec<Worker>,
    sender: mpsc::Sender<Job>,
}

impl ThreadPool {
    pub fn new(mut size: Option<usize>) -> ThreadPool {
        if size.is_none() {
            size = Some(num_cpus::get());
        }
        let ((sender, receiver), size) = (mpsc::channel(), size.unwrap());
        let (receiver, mut workers) = (Arc::new(Mutex::new(receiver)), Vec::with_capacity(size));
        for i in 0..size {
            workers.push(Worker::new(Some(i), Arc::clone(&receiver)));
        }
        ThreadPool { workers, sender }
    }

    pub fn execute<F>(&self, f: F)
    where
        F: FnOnce() + Send + 'static,
    {
        self.sender.send(Box::new(f)).unwrap();
    }

    pub fn count(&self) -> usize {
        self.workers.len()
    }
}

// impl Drop for ThreadPool {
//     fn drop(&mut self) {
//         for worker in &mut self.workers {
//             println!("Shutting down worker {}", worker.id);
//
//             if let Some(thread) = worker.thread.take() {
//                 thread.join().unwrap();
//             }
//         }
//     }
// }
