package com.balbi;


import javax.swing.*;
import java.awt.*;

class HelloComponent extends JComponent {
    @Override
    public void paintComponent(Graphics g) {
        g.setColor(Color.GREEN);
        g.drawString("Hello Java", 125, 95);
    }
}

/**
 * Hello world!
 */
public final class App {
    private App() {
    }

    private static void referenceObjectExample(JLabel label) {
        label.setText("Changed by other method");

    }

    /**
     * Says hello to the world.
     * @param args The arguments of the program.
     */
    public static void main(String[] args) {
        System.out.println(System.currentTimeMillis());
        System.out.println("Hello World!");
        // JOptionPane.showMessageDialog(null, "TESTE TESTE", null, 0);

        // JFrame frame = new JFrame("Hello Java");
        // JLabel label= new JLabel("Hello World", SwingConstants.CENTER);
        // HelloComponent hello = new HelloComponent();
        // frame.setSize(Window.getWindows()[0].getWidth(), 300);
        // frame.add(hello);

        // frame.setVisible(true);
        // referenceObjectExample(label);

    }
}
