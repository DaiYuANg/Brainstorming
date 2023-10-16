mod create_brainstorming;

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use crate::create_brainstorming::create_brainstorming_file;
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }

    #[test]
    fn test_create_brainstorming(){
        create_brainstorming_file("./workspace")
    }
}
