pub mod io;

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use crate::io::dir_walk;

    #[test]
    fn test_dir_walk() {
        let path = dirs::home_dir().unwrap().join("Projects");
        dbg!(&path);
        dir_walk(path);
        return;
    }
}
