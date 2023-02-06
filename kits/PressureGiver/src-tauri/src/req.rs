mod req{
    use std::collections::HashMap;
    use std::ptr::null;

    pub async fn request<T, E>() -> Result<T, E> {
        let resp = reqwest::get("https://httpbin.org/ip")
            .json::<HashMap<String, String>>()
            .await;
        println!("{}",resp.keys().unwrap());
        return Result::Ok(());
    }
}

mod tests {
    use super::*;

    #[test]
    fn it_works() {
        req::request();

    }
}