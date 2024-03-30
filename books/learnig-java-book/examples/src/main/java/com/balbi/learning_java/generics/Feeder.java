package com.balbi.learning_java.generics;

import java.util.ArrayList;

public class Feeder<E extends Animal> {

  private ArrayList<E> feededAnimals = new ArrayList<>();
  
  public void feed(E animal) {
    animal.eat();
    feededAnimals.add(animal);
  }

  public E getLastFeeded() {
    return feededAnimals.get(feededAnimals.size() -1);
  }

}
