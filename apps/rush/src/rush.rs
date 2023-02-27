use crate::commands::Commands;

pub struct Rush {
    cmds: Commands,
}

impl Default for Rush {
    fn default() -> Self {
        Rush {
            cmds: Default::default(),
        }
    }
}
