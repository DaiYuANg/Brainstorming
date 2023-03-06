mod io;

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::io::dir_walk;

    #[test]
    fn test_dir_walk() {
        dir_walk(dirs::home_dir().unwrap());
        return;
    }
}
