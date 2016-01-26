export function fileModel($parse,$q) {
  function link(scope, element, attrs) {

    let model = $parse(attrs.fileModel);
    var modelSetter = model.assign;

    //let onLoad = function(reader) {
    //  console.log(reader)
    //};
    //
    //let reader = new FileReader();
    //reader.onload = onLoad(reader);
    //
    //
    element.on('change', function() {
      let file = element[0].files[0];

      readFile(file).then((data) => {
        modelSetter(scope, {name: file.name, data: data});
      });

    });

    let readFile = function(file) {
      let deffered = $q.defer();

      let reader = new FileReader();
      reader.onload = (e) => {
        deffered.resolve(e.target.result);
      };

      reader.onerror = (e) => {
        deffered.reject(e);
      };

      reader.readAsDataURL(file);

      return deffered.promise;
    };

    //element.on('change', () => {
    //  let file = element[0].files[0];
    //  let reader = new FileReader();
    //
    //  reader.onload = function(e) {
    //    let data = e.target.result;
    //
    //    scope.$apply(() => {
    //      model.assign(scope, { file: element[0].files[0], data: data });
    //    })
    //  };
    //
    //  reader.onprogress = function() {
    //
    //  }
    //
    //  reader.readAsDataURL(file);
    //});
  }

  return {
    restrict: 'A',
    link: link
  }
}