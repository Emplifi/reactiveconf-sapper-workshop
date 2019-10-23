<style>
  .nav-button {
    background: none;
    border: none;
    cursor: pointer;
    padding-bottom: 15px;
    vertical-align: middle;
    z-index: 20;
    position: relative;
    outline: none;
  }

  .nav-button span {
    transition: all 0.3s ease 0s;
    display: block;
    height: 2px;
    width: 25px;
    background: #ffffff;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  .nav-button span:before,
  .nav-button span:after {
    background: #ffffff;
    content: '';
    height: 100%;
    left: 4px;
    position: absolute;
    bottom: -6px;
    right: 0;
    transition: all 0.3s ease 0s;
  }

  .nav-button span:after {
    bottom: -12px;
    left: 8px;
    top: auto;
  }

  .nav-button:hover span:after,
  .nav-button:hover span:before {
    left: 0;
  }

  :global(.nav-is-open .nav-button span) {
    background: transparent !important;
  }

  :global(.nav-is-open .nav-button span:before) {
    left: -1px !important;
    bottom: -6px !important;
    transform: rotate(-45deg);
  }

  :global(.nav-is-open .nav-button span:after) {
    left: 0 !important;
    bottom: -7px !important;
    transform: rotate(45deg);
  }
</style>

<div>
  <button type="button" class="nav-button" aria-label="show menu" on:click>
    <span />
  </button>
</div>
