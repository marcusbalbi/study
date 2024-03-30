package com.balbi.learning_java.generics;

public class Example {

  Feeder<Animal> feeder = new Feeder();
  
  public Example() {
    feeder.feed(new Animal() {
      @Override
      public void eat() {
        System.out.println("EATING::");
      }
    });

    System.out.println(feeder.getLastFeeded());
  }

}
