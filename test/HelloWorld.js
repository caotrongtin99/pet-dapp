const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Hello World", function() {
  const message = "Hello World!!!"
  const newMessage = "Bye World!!!"
  it("Should return message correctly", async function() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld")
    const helloWorld = await HelloWorld.deploy(message)
    await helloWorld.deployed()
    expect(await helloWorld.printHelloWorld()).to.be.equal(message)
    await helloWorld.updateMessage(newMessage)
    expect(await helloWorld.printHelloWorld()).to.be.equal(newMessage)
  })
})