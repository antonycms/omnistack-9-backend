db.createUser({
  user: "omni",
  pwd: "test",
  roles: [
    {
      role: "readWrite",
      db: "omni"
    }
  ]
})

db.omni.insert({
  test: "test"
})