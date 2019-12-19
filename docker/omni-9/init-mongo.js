db.createUser({
  user: "user",
  pwd: "pass",
  roles: [
    {
      role: "readWrite",
      db: "omni"
    }
  ]
})

db.test.insert({
  test: "test"
});
