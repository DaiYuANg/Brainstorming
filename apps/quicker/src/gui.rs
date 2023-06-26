// // use eframe::epi::Frame;
// // use eframe::{run_native, NativeOptions};
// use egui::Context;
//
// pub struct QuickerGUI {
//     name: String,
//     age: u32,
// }
//
// impl QuickerGUI {
//     pub fn show() {
//         let options = NativeOptions {
//             initial_window_size: Some(egui::vec2(500.0, 500.0)),
//             ..Default::default()
//         };
//
//         run_native(Box::new(QuickerGUI::default()), options)
//     }
// }
//
// impl Default for QuickerGUI {
//     fn default() -> Self {
//         Self {
//             name: "Quicker".to_owned(),
//             age: 32,
//         }
//     }
// }
//
// impl eframe::epi::App for QuickerGUI {
//     fn update(&mut self, ctx: &Context, _frame: &Frame) {
//         egui::CentralPanel::default().show(ctx, |ui| {
//             ui.heading("My egui Application");
//             ui.horizontal(|ui| {
//                 let _name_label = ui.label("text");
//                 ui.text_edit_singleline(&mut self.name);
//                 let _name_label = ui.label("Your name: ");
//                 // ui.text_edit_singleline(&mut self.name).
//                 //     .labelled_by(name_label.id);
//             });
//             ui.add(egui::Slider::new(&mut self.age, 0..=120).text("age"));
//             if ui.button("Click each year").clicked() {
//                 self.age += 1;
//             }
//             ui.label(format!("Hello '{}', age {}", self.name, self.age));
//         });
//     }
//
//     fn name(&self) -> &str {
//         "Quicker"
//     }
// }
