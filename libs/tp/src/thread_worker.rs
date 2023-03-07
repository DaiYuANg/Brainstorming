use crate::types::Job;
use rand::Rng;
use std::sync::{mpsc, Arc, Mutex};
use std::thread;

#[derive(Debug)]
pub struct Worker {
    pub id: usize,
    pub thread: Option<thread::JoinHandle<()>>,
}

impl Worker {
    pub fn new(mut id: Option<usize>, receiver: Arc<Mutex<mpsc::Receiver<Job>>>) -> Worker {
        if id.is_none() {
            id = Some(rand::thread_rng().gen_range(0..100));
        }
        let id = id.unwrap();
        let thread = thread::spawn(move || loop {
            let job = receiver.lock().unwrap().recv().unwrap();

            println!("Worker {} got a job; executing.", id);

            job.call_box();
        });

        Worker {
            id,
            thread: Some(thread),
        }
    }
}
