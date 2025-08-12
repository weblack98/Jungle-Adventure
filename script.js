body {
  font-family: Arial, sans-serif;
  text-align: center;
  background: #222;
  color: #eee;
  margin-top: 50px;
}

.slot-machine {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.reel {
  width: 100px;
  height: 100px;
  margin: 0 10px;
  background: #444;
  border-radius: 10px;
  line-height: 100px;
  font-size: 60px;
  color: #f0c040;
  box-shadow: 0 0 20px #f0c040;
  user-select: none;
  transition: transform 0.3s ease-out;
}

button {
  font-size: 20px;
  padding: 10px 30px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: #f0c040;
  color: #222;
  font-weight: bold;
  box-shadow: 0 0 15px #f0c040;
  user-select: none;
}

button:hover {
  background: #ffd860;
}
