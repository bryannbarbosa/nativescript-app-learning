Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("tns-core-modules/file-system");
// Allows greater flexibility with `file-system` and Angular
// Also provides a way for `file-system` to be mocked for testing
var NSFileSystem = (function () {
    function NSFileSystem() {
    }
    NSFileSystem.prototype.currentApp = function () {
        return file_system_1.knownFolders.currentApp();
    };
    NSFileSystem = __decorate([
        core_1.Injectable()
    ], NSFileSystem);
    return NSFileSystem;
}());
exports.NSFileSystem = NSFileSystem;
//# sourceMappingURL=ns-file-system.js.map