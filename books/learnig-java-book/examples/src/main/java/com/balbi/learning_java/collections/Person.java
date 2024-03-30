package com.balbi.learning_java.collections;

public class Person {
  String id;
  String name;
  String lastName;
  int age;

  public Person(String name, String lastName, int age) {
    this.id = name.toLowerCase().concat("_").concat(lastName.toLowerCase());
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  public String getId() {
    return this.id;
  }

  public String toString() {
    return new StringBuilder()
        .append(id)
        .append(" ==> ")
        .append(lastName)
        .append(", ")
        .append(name)
        .append(", ")
        .append(age)
        .append(" anos")
        .toString();
  }
}