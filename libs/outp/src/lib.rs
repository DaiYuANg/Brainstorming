pub mod println;

pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use crate::println::print_ln;
    use super::*;

    #[test]
    fn it_works() {
        print_ln("123")

        // let result = add(2, 2);
        // assert_eq!(result, 4);
    }
}
