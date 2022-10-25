class OS {
   constructor() {
      this.openedFilesStates = new Map();
      this.fileDescriptorIds = new Map();
      this.fdCounter = 0;
   }

   #generateFd() {
      this.fdCounter++;
      return this.fdCounter;
   }

   #generateMapKey(pid, fname) {
      return `${pid}${fname}`;
   }

   #changeCursorPosition(fileId, count) {
      const selectedOpenFile = this.openedFilesStates.get(fileId);
      this.openedFilesStates.set(fileId, {
         pid: selectedOpenFile.pid,
         fd: selectedOpenFile.fd,
         cursor: count,
      });
   }

   openFile(pid, fname) {
      const fileId = this.#generateMapKey(pid, fname);
      if (!this.openedFilesStates.has(fileId)) {
         const generatedFd = this.#generateFd();

         this.openedFilesStates.set(fileId, {
            cursor: 0,
            pid: pid,
            fd: generatedFd,
         });

         this.fileDescriptorIds.set(generatedFd, fileId);

         const fileContent = files.find((file) => file.name === fname).content;

         MyStore.storeFile(generatedFd, fname, fileContent);
         return generatedFd;

      } else {
         throw Error("The file is already open in this process.");
      }
   }

   readFile(fd, count) {
      const selectedFileContent = MyStore.getFileContent(fd); 
      const fileId = this.fileDescriptorIds.get(fd);
      const cursorPointer = this.openedFilesStates.get(fileId).cursor;
      const value = selectedFileContent.slice(cursorPointer, cursorPointer + count);

      this.#changeCursorPosition(fileId, cursorPointer + count);
      return value;
   }

   writeFile(fd, data) {
      const storedFile = MyStore.getFile(fd);
      const fileId = this.fileDescriptorIds.get(fd);

      MyStore.storeFile(fd, storedFile.fname, data);
      this.#changeCursorPosition(fileId, 0);
   }

   seekFile(fd, cursor) {
      const fileId = this.fileDescriptorIds.get(fd);
      this.#changeCursorPosition(fileId, cursor);
   }

   closeFile(fd) {
      const keyName = this.fileDescriptorIds.get(fd);
      if (this.openedFilesStates.has(keyName)) {
         this.openedFilesStates.delete(keyName);
      }
      return;
   }
}

class Store {
   constructor() {
      this.storedFiles = new Map();
   }

   storeFile(fd, fname, content) {
      this.storedFiles.set(fd, {
         fname: fname,
         content: content,
      });
   }

   #getStoredFileByFd(fd) {
      if (this.storedFiles.has(fd)) {
         return this.storedFiles.get(fd);
      }
      throw Error("No such file stored.");
   }

   getFileContent(fd) {
      return this.#getStoredFileByFd(fd).content;
   }

   getFile(fd) {
      return this.storedFiles.get(fd);
   }
}




const MyOS = new OS;
const MyStore = new Store;

const processes = [
   {name: "A", pid: 0},
   {name: "B", pid: 1},
];

const files = [
   {name: "file1", content: "Hello!"},
   {name: "file2", content: "How are you?"},
   {name: "file3", content: "JS is awesome."},
];

const fd1 = MyOS.openFile(processes[0].pid, files[0].name);
const fd2 = MyOS.openFile(processes[1].pid, files[1].name);

console.log(MyOS.readFile(fd1, 3)); // Hel
console.log(MyOS.readFile(fd1, 1)); // l
console.log(MyOS.readFile(fd1, 2)); // o!

MyOS.writeFile(fd1, "World");
console.log(MyOS.readFile(fd1, 4)); // Worl

MyOS.seekFile(fd1, 2);
console.log(MyOS.readFile(fd1, 1)); // r

MyOS.closeFile(fd2);

