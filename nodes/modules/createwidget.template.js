function create$nxWName$() {
  $("body").append('<div id="d$nxWName$"></div>');
  nx.add("$nxWType$", {
    name: "$nxWName$",
    parent: "d$nxWName$",
    w: $nxWWidth$,
    h: $nxWHeight$
  });
  $("#d$nxWName$").css({
    position: "fixed",
    $vAnch$: $nxWTop$,
    $hAnch$: $nxWLeft$,
    zIndex: $nxWZ$
  });
  $("canvas:not(.nx)").remove();
  //customscript//
  $nxWName$.sendsTo(function(data) {
    vvvv.v$nxWName$("$nxWName$: " + JSON.stringify(data));
  });
  vvvv.v$nxWName$("$nxWName$: {none: 0}");
}
create$nxWName$();
