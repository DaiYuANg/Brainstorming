mod imp;

use gtk::gio::Application;
use gtk::prelude::{ApplicationExt, ApplicationExtManual};
use gtk::AccessibleRole::Window;
use gtk::{gio, glib};

/// .
///
/// # Panics
///
/// Panics if .
fn main() -> glib::ExitCode {
    // Register and include resources
    gio::resources_register_include!("todo_1.gresource").expect("Failed to register resources.");

    // Create a new application
    let app = Application::builder()
        .application_id("org.gtk_rs.Todo1")
        .build();

    // Connect to "activate" signal of `app`
    app.connect_activate(build_ui);

    // Run the application
    app.run()
}

fn build_ui(app: &Application) {
    // Create a new custom window and show it
    let window = Window::new(app);
    window.present();
}
