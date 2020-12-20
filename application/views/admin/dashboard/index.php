<?php $this->load->view("admin/includes/styles.php")?>

<!-- ============================= CSS LINKS FOR THIS PAGE ==============================-->
<link rel="stylesheet" type="text/css" href="<?php echo base_url("public/admin/")?>src/plugins/datatables/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet" type="text/css" href="<?php echo base_url("public/admin/")?>src/plugins/datatables/css/responsive.bootstrap4.min.css">
<!-- ============================= CSS LINKS FOR THIS PAGE ==============================-->


<?php $this->load->view("admin/includes/preloader.php")?>

<?php $this->load->view("admin/includes/header.php")?>

<?php $this->load->view("admin/includes/right-sidebar.php")?>

<?php $this->load->view("admin/includes/left-sidebar.php")?>

<?php
$base_name = basename(__DIR__);
$this->load->view("admin/$base_name/$base_name.php")?>

<?php $this->load->view("admin/includes/scripts.php")?>


<!--============================JS SCRIPTS FOR THIS PAGE=====================================-->
<script src="<?php echo base_url("public/admin/")?>src/plugins/apexcharts/apexcharts.min.js"></script>
<script src="<?php echo base_url("public/admin/")?>src/plugins/datatables/js/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url("public/admin/")?>src/plugins/datatables/js/dataTables.bootstrap4.min.js"></script>
<script src="<?php echo base_url("public/admin/")?>src/plugins/datatables/js/dataTables.responsive.min.js"></script>
<script src="<?php echo base_url("public/admin/")?>src/plugins/datatables/js/responsive.bootstrap4.min.js"></script>
<script src="<?php echo base_url("public/admin/")?>vendors/scripts/dashboard.js"></script>
<!--============================JS SCRIPTS FOR THIS PAGE=====================================-->


