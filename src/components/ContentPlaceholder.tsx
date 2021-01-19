import * as React from "react";
import { motion } from "framer-motion";

export const ContentPlaceholder = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo
    tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Viva Forevis aptent
    taciti sociosqu ad litora torquent. Quem manda na minha terra sou euzis! Não
    sou faixa preta cumpadi, sou preto inteiris, inteiris.
  </motion.div>
);
