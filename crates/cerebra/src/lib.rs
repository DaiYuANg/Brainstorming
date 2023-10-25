mod cerebra_core;

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::cerebra_core::create_brainstorming_file;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }

    #[test]
    fn test_create_brainstorming() {
        create_brainstorming_file("./workspace")
    }
}
