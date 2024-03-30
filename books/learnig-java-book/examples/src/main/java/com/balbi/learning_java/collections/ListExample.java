package com.balbi.learning_java.collections;

import java.util.ArrayList;

public class ListExample {
  
  ArrayList<Person> people = new ArrayList<>();

  public ListExample () {
    people.add(new Person("Marcus", "Balbi", 34));
    people.add(new Person("Julia", "Balbi", 4));

    for(int i =0;i < people.size();i++)
      System.out.println(people.get(i).toString());
  }



}
