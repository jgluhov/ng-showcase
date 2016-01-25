export function fileModel($parse) {
  function link(scope, element, attrs) {
    let model = $parse(attrs.fileModel);
    let reader = new FileReader();

    element.on('change', (e) => {
      let file = element[0].files[0];

      reader.onloadend = (e) => {
        let data = e.target.result;
        scope.$apply(() => {
          model.assign(scope, { file: file, data: data });
        })
      };
      reader.readAsDataURL(file);
    });
  }

  return {
    restrict: 'A',
    link: link
  }
}